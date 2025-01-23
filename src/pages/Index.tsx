import React, { useState } from 'react';
import { getRandomJoke } from '@/utils/jokes';
import { JokeDisplay } from '@/components/JokeDisplay';
import { ReactionButton } from '@/components/ReactionButton';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

const Index = () => {
  const [currentJoke, setCurrentJoke] = useState(getRandomJoke());
  const [isGenerating, setIsGenerating] = useState(false);
  const [laughs, setLaughs] = useState(0);
  const [groans, setGroans] = useState(0);

  const generateNewJoke = () => {
    setIsGenerating(true);
    // Simulate loading for better UX
    setTimeout(() => {
      setCurrentJoke(getRandomJoke());
      setIsGenerating(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-muted/30 flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-['Bangers'] text-primary">Dad Jokes Generator</h1>
          <p className="text-muted-foreground">Warning: These jokes might make you groan!</p>
        </div>

        <JokeDisplay joke={currentJoke} />

        <div className="flex flex-col items-center gap-6">
          <Button
            size="lg"
            onClick={generateNewJoke}
            disabled={isGenerating}
            className="bg-secondary hover:bg-secondary/90 text-white font-bold py-6 px-8 rounded-xl text-lg shadow-lg transition-all hover:scale-105 active:scale-95"
          >
            {isGenerating ? (
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            ) : null}
            Generate Another Dad Joke
          </Button>

          <div className="flex gap-8">
            <ReactionButton
              icon="😂"
              label="Laugh"
              onClick={() => setLaughs(prev => prev + 1)}
              count={laughs}
            />
            <ReactionButton
              icon="🙄"
              label="Groan"
              onClick={() => setGroans(prev => prev + 1)}
              count={groans}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;